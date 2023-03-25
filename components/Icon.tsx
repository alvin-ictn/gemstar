import classNames from "classnames"

interface IconInterface {
    src: string
    size?: string
    width?: string
    height?: string
    color?: string
    onClick?: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
    onMouseDown?: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
    style?: any
    className?: string
}

function Icon({
    src,
    size,
    width = '24px',
    height = '24px',
    color = '#ffffff',
    onClick,
    className,
    onMouseDown,
    style,
}: IconInterface) {
    return (
        <span
            onClick={onClick}
            onMouseDown={onMouseDown}
            className={classNames('block !bg-cover mask-cover', className)}
            style={{
                width: size ?? width,
                height: size ?? height,
                background: color,
                WebkitMask: `url(${src})`,
                ...style,
            }}
        />
    )
}

export default Icon