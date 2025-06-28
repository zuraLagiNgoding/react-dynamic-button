import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import type { ButtonSize, ButtonVariant, TooltipPosition } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export interface ButtonConfig {
  variant: ButtonVariant;
  size: ButtonSize;
  tooltip: string;
  tooltipPosition: TooltipPosition;
  isTooltip: boolean;
  isIcon: boolean;
  content: string;
}

interface PlaygroundProps {
  config: ButtonConfig;
  setConfig: React.Dispatch<React.SetStateAction<ButtonConfig>>;
}

const Playground = ({ config, setConfig }: PlaygroundProps) => {
  const variants = ["primary", "secondary", "safe", "warning", "danger", "outline"];
  const sizes = ["sm", "base", "lg"];
  const tooltipPositions = ["top", "left", "right", "bottom"];

  const updateConfig = (key: Partial<ButtonConfig>) => {
    setConfig((prev) => ({ ...prev, ...key }));
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-black text-green-400 rounded-lg p-6 font-mono text-sm">
        <pre className="overflow-x-auto">
          <code className="text-green-400">
            &lt;Button variant="
            <Select
              value={config.variant}
              onValueChange={(variant: ButtonVariant) =>
                updateConfig({ variant: variant })
              }
            >
              <SelectTrigger className="inline-flex w-auto h-auto p-0 border-none bg-transparent text-orange-400 font-mono text-sm cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {variants.map((variant) => (
                  <SelectItem
                    key={variant}
                    value={variant}
                    className="text-orange-400 focus:bg-gray-700 focus:text-orange-400"
                  >
                    {variant}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            " size="
            <Select
              value={config.size}
              onValueChange={(size: ButtonSize) => updateConfig({ size: size })}
            >
              <SelectTrigger className="inline-flex w-auto h-auto p-0 border-none bg-transparent text-orange-400 font-mono text-sm cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {sizes.map((size) => (
                  <SelectItem
                    key={size}
                    value={size}
                    className="text-orange-400 focus:bg-gray-700 focus:text-orange-400"
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            "
            {config.isTooltip && (
              <>
                {" "}
                tooltip="
                <Input
                  value={config.tooltip}
                  onChange={(e) => updateConfig({ tooltip: e.target.value })}
                  className="inline-flex w-auto h-auto p-0 border-none bg-transparent text-orange-400 font-mono text-sm selection:bg-white selection:text-black rounded-none"
                  style={{
                    width: `${Math.max(config.tooltip.length * 0.57, 0.3)}em`,
                  }}
                />
                " tooltipPosition="
                <Select
                  value={config.tooltipPosition}
                  onValueChange={(tooltipPosition: TooltipPosition) =>
                    updateConfig({ tooltipPosition })
                  }
                >
                  <SelectTrigger className="inline-flex w-auto h-auto p-0 border-none bg-transparent text-orange-400 font-mono text-sm cursor-pointer">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {tooltipPositions.map((tooltipPosition) => (
                      <SelectItem
                        key={tooltipPosition}
                        value={tooltipPosition}
                        className="text-orange-400 focus:bg-gray-700 focus:text-orange-400"
                      >
                        {tooltipPosition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                "
              </>
            )}
            {config.isIcon && (
              <>
                {" "}
                icon=&#123;
                <span className="text-orange-400 font-mono text-sm">
                  PlusCircle
                </span>
                &#125;
              </>
            )}
            &gt;
            <Input
              value={config.content}
              onChange={(e) => updateConfig({ content: e.target.value })}
              className="inline-flex w-auto h-auto p-0 border-none bg-transparent text-orange-400 font-mono text-sm selection:bg-white selection:text-black rounded-none"
              style={{
                width: `${Math.max(config.content.length * 0.57, 0.3)}em`,
              }}
            />
            &lt;/Button&gt;
          </code>
        </pre>
      </div>
      <div className="max-w-4xl mx-auto flex items-center gap-6 px-4">
        <div className="flex items-center gap-3 font-medium">
          <Checkbox
            checked={config.isIcon}
            onCheckedChange={() => updateConfig({ isIcon: !config.isIcon })}
            id="icon"
          />
          <label htmlFor="icon">Icon</label>
        </div>
        <div className="flex items-center gap-3 font-medium">
          <Checkbox
            checked={config.isTooltip}
            onCheckedChange={() =>
              updateConfig({ isTooltip: !config.isTooltip })
            }
            id="tooltip"
          />
          <label htmlFor="tooltip">Tooltip</label>
        </div>
      </div>
    </>
  );
};

export default Playground;
