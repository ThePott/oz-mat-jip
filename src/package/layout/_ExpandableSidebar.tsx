import Vstack from "./_VStack"

type SidebarPosition = "LEFT" | "RIGHT"

interface AdditionalProps {
    doExpand?: boolean
    position: SidebarPosition
    gap?: number
    widthInPixel: number
}

type BaseProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type ExpandableSidebarProps = BaseProps & AdditionalProps

const FloatingSidebar = ({ doExpand, widthInPixel, className, gap, position, children, ...props }: ExpandableSidebarProps) => {
    const positionClassName = position === "LEFT" ? "left-0" : "right-0"
    const widthClassName = doExpand ? "w-screen" : `w-[${widthInPixel}px]`
    return (
        <div {...props} className={`${positionClassName} ${widthClassName} absolute shrink-0 ${className}`}>
            <Vstack gap={gap}>{children}</Vstack>
        </div>
    )
}

const ExpandableSidebar = ({ children, ...props }: ExpandableSidebarProps) => {
    return (
        <div className="relative">
            <FloatingSidebar {...props}>{children}</FloatingSidebar>
        </div>
    )
}

export default ExpandableSidebar
