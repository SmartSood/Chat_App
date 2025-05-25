import { type IconProps, iconSizeVariants } from './icon_props'
export default function DropdownArrowIcon(props: IconProps) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className={iconSizeVariants[props.size]} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 16.5L7.5 11.25H16.5L12 16.5Z" fill="currentColor"/>
            </svg>
        </div>
    );
}