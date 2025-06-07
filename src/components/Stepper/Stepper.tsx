import React from "react"
import { Check } from "lucide-react"

export interface StepperStep {
    icon?: React.ReactNode
    label: string
    content: React.ReactNode
}

interface StepperProps {
    steps: StepperStep[]
    initialStep?: number
}

/**
 *
 * @param {StepperProps} props 
 * @returns JSX.Element
 * @description Stepper component that displays a series of steps with icons and labels.
 * Each step can have a custom icon and label, and the current step is highlighted.
 * The component currently allows only for a visual representation of progress through a series of steps.
 */

export default function Stepper({ steps, initialStep = 0 }: StepperProps) {
    return (
        <div className="w-full mx-auto bg-white">
            <div className="border-b border-gray-200 py-3 sm:px-0 px-4">
                <div className="flex items-center mx-auto max-w-3xl">
                    {steps.map((step, idx) => {
                        let icon, color;
                        if (idx < initialStep) {
                            icon = <Check size={20} />;
                            color = "text-green-600 font-semibold";
                        } else if (idx === initialStep) {
                            icon = step.icon;
                            color = "text-blue-600 font-semibold";
                        } else {
                            icon = step.icon;
                            color = "text-gray-400";
                        }
                        return (
                            <React.Fragment key={idx}>
                                <div className="flex gap-2 items-center">
                                    <span className={color}>{icon}</span>
                                    <span className={`text-sm sm:inline hidden ${color}`}>{step.label}</span>
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="flex-1 h-[1px] mx-2 bg-gray-200" />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            {/* Display the content of the current step */}
            <div className="flex flex-col justify-between mx-auto max-w-3xl">{steps[initialStep].content}</div>
        </div>
    )
}