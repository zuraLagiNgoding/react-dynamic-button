import { PlusCircle } from "lucide-react";
import Button, {
} from "./components/ui/button";
import React from "react";
import Playground, { type ButtonConfig } from "./components/Playground";

function App() {
  const [buttonConfig, setButtonConfig] = React.useState<ButtonConfig>({
    variant: "primary",
    size: "base",
    content: "Click Me",
    tooltip: "Hello World!",
    tooltipPosition: "top",
    isTooltip: false,
    isIcon: false,
  });

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center items-center bg-gradient-to-br from-0% to-teal-100/50">
      <Button
        variant={buttonConfig.variant}
        size={buttonConfig.size}
        icon={buttonConfig.isIcon ? PlusCircle : undefined}
        tooltip={buttonConfig.isTooltip ? buttonConfig.tooltip : undefined}
        tooltipPosition={buttonConfig.tooltipPosition}
      >
        {buttonConfig.content}
      </Button>

      <div className="w-full p-6 space-y-3">
        <Playground
          config={buttonConfig}
          setConfig={setButtonConfig}
        />
      </div>
    </div>
  );
}

export default App;
