import CenterInRow from "./_CenterInRow"

interface BaseVstackProps {
    gap?: number
}

interface AdditionalVstackProps {
    center?: boolean
}

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type VstackProps = DivProps & BaseVstackProps & AdditionalVstackProps

const BaseVstack = ({ gap = 3, className, children, ...props }: VstackProps) => {
    return (
        <div {...props} className={`gap-${gap} ${className} flex flex-col`}>
            {children}
        </div>
    )
}

const Vstack = ({ center, children, ...props }: VstackProps) => {
    if (!center) {
        return <BaseVstack {...props}>{children}</BaseVstack>
    }

    return (
        <CenterInRow>
            <BaseVstack {...props}>{children}</BaseVstack>
        </CenterInRow>
    )
}

export default Vstack
