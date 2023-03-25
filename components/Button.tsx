import Image from "next/image"
import Icon from "./Icon"
import Text from "./Text"

interface ButtonInterface {
    text?: string
    icon?: string
    iconSize?: string
    iconColor?: string
    iconHeight?: number
    iconWidth?: number
    color?: string
    textColor?: string
}

const Button = ({ text, icon, iconSize, iconColor, color, textColor }: ButtonInterface) => {
    const alt = icon ? icon.split(".svg")[0].substring(1) : ""
    return <button
        className="text-base font-bold text-black flex items-center gap-[9px] py-[3px] px-[25px] h-8 rounded-[53px]"
        style={{ backgroundColor: color || "transparent", color: textColor || "black" }}

    >

        {icon && <Icon
            src="/plus.svg"
            size={iconSize}
            color={iconColor}
            className="flex items-center justify-center text-center"
        />}
        <Text type="main" className="text-white hidden md:block">{text}</Text>
    </button>
}

export default Button