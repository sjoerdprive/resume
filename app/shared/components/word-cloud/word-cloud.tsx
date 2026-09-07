import { useEffect, useMemo, useRef, useState } from "react";

type WeightedValue = {
  value: string;
  weight: number;
};

type WordCloudProps = {
  values: WeightedValue[];
  width?: number;
  height?: number;
  minFontSize?: number;
  maxFontSize?: number;
  className?: string;
};

type PlacedWord = WeightedValue & {
  x: number;
  y: number;
  fontSize: number;
  width: number;
  height: number;
};

export function WordCloud({
  values,
  width = 600,
  height = 400,
  minFontSize = 14,
  maxFontSize = 64,
  className,
}: WordCloudProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({
    width,
    height,
  });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateSize = (nextWidth: number, nextHeight: number) => {
      const resolvedWidth = Math.max(1, Math.round(nextWidth));
      const resolvedHeight = Math.max(1, Math.round(nextHeight));

      setContainerSize((prev) => {
        if (prev.width === resolvedWidth && prev.height === resolvedHeight) {
          return prev;
        }

        return {
          width: resolvedWidth,
          height: resolvedHeight,
        };
      });
    };

    updateSize(element.clientWidth, element.clientHeight || height);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      updateSize(entry.contentRect.width, entry.contentRect.height || height);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [height]);

  const widthScale = containerSize.width / width;
  const scaledMinFontSize = Math.max(8, minFontSize * widthScale);
  const scaledMaxFontSize = Math.max(
    scaledMinFontSize + 1,
    maxFontSize * widthScale,
  );

  const words = useMemo(
    () =>
      layoutWords(
        values,
        containerSize.width,
        containerSize.height,
        scaledMinFontSize,
        scaledMaxFontSize,
      ),
    [
      values,
      containerSize.width,
      containerSize.height,
      scaledMinFontSize,
      scaledMaxFontSize,
    ],
  );

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
      }}
    >
      {words.map((word, index) => (
        <span
          key={`${word.value}-${index}`}
          style={{
            position: "absolute",
            left: word.x,
            top: word.y,
            fontSize: word.fontSize,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {word.value}
        </span>
      ))}
    </div>
  );
}

function layoutWords(
  values: WeightedValue[],
  containerWidth: number,
  containerHeight: number,
  minFontSize: number,
  maxFontSize: number,
): PlacedWord[] {
  if (!values.length) return [];

  const sorted = [...values]
    .filter((v) => v.value.trim() && v.weight > 0)
    .sort((a, b) => b.weight - a.weight);

  if (!sorted.length) return [];

  const minWeight = sorted.at(-1)!.weight;
  const maxWeight = sorted[0].weight;

  const fontSize = (weight: number) => {
    if (maxWeight === minWeight) {
      return (minFontSize + maxFontSize) / 2;
    }

    const t =
      (Math.log(weight) - Math.log(minWeight)) /
      (Math.log(maxWeight) - Math.log(minWeight));

    return minFontSize + t * (maxFontSize - minFontSize);
  };

  const placed: PlacedWord[] = [];

  for (const word of sorted) {
    const size = fontSize(word.weight);

    // Approximate text dimensions. The actual browser dimensions
    // are close enough for the collision algorithm.
    const textWidth = word.value.length * size * 0.58;
    const textHeight = size;

    const box = {
      width: textWidth,
      height: textHeight,
    };

    let position: { x: number; y: number } | null = null;

    // Start in the center and expand outward along an Archimedean spiral.
    for (let i = 0; i < 2000; i++) {
      const theta = i * 0.25;
      const radius = 2 + theta * 2.2;

      const x = containerWidth / 2 + Math.cos(theta) * radius - box.width / 2;

      const y = containerHeight / 2 + Math.sin(theta) * radius - box.height / 2;

      if (
        x < 0 ||
        y < 0 ||
        x + box.width > containerWidth ||
        y + box.height > containerHeight
      ) {
        continue;
      }

      const candidate = {
        x,
        y,
        width: box.width,
        height: box.height,
      };

      if (!placed.some((other) => intersects(candidate, other))) {
        position = { x, y };
        break;
      }
    }

    // Don't render words that couldn't fit.
    if (!position) continue;

    placed.push({
      ...word,
      ...position,
      fontSize: size,
      width: box.width,
      height: box.height,
    });
  }

  return placed;
}

function intersects(
  a: { x: number; y: number; width: number; height: number },
  b: { x: number; y: number; width: number; height: number },
) {
  const padding = 4;

  return !(
    a.x + a.width + padding < b.x ||
    a.x > b.x + b.width + padding ||
    a.y + a.height + padding < b.y ||
    a.y > b.y + b.height + padding
  );
}
