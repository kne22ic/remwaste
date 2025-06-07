import SkipSelection from '@/pages/Skips/SkipSelection'
import type { StepperStep } from './Stepper'
import {
    MapPin,
    Trash2,
    Truck,
    ShieldCheck,
    Calendar,
    CreditCard
} from 'lucide-react'

// Extend the StepperStep interface to include an icon
// Solely for the purpose of this example, we are showcasing interface extension
export interface StepperStepWithIcon extends StepperStep {
    icon: React.ReactNode
}

const steps: StepperStepWithIcon[] = [
    { icon: <MapPin size={18} />, label: "Postcode", content: <div>Step 1 (placeholder)</div> },
    { icon: <Trash2 size={18} />, label: "Waste Type", content: <div>Step 2 (placeholder)</div> },
    { icon: <Truck size={18} />, label: "Select Skip", content: <SkipSelection /> },
    { icon: <ShieldCheck size={18} />, label: "Permit Check", content: <div>Step 4 (placeholder)</div> },
    { icon: <Calendar size={18} />, label: "Choose Date", content: <div>Step 5 (placeholder)</div> },
    { icon: <CreditCard size={18} />, label: "Payment", content: <div>Step 6 (placeholder)</div> },
]

export default steps