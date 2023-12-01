import { Tooltip } from "@calcom/ui";
import { Info } from "@calcom/ui/components/icon";

export default function InfoBadge({ content }: { content: string }) {
  return (
    <>
      <Tooltip side="top" content={content}>
        <span title={content}>
          <Info className="relative left-1 right-1 top-px mt-px h-8 w-8" />
        </span>
      </Tooltip>
    </>
  );
}
