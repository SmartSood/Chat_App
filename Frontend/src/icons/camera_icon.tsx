import { type IconProps, iconSizeVariants } from './icon_props'
export function CameraIcon(props:IconProps){


return(
    <div>
        <svg className={iconSizeVariants[props.size]} xmlns="http://www.w3.org/2000/svg" width="47" height="50" viewBox="0 0 47 50" fill="none">
  <g clip-path="url(#clip0_62_6498)">
    <path d="M1.94597 39.5833C1.94597 40.6884 2.35602 41.7482 3.0859 42.5296C3.81578 43.311 4.80571 43.75 5.83791 43.75H40.8654C41.8976 43.75 42.8875 43.311 43.6174 42.5296C44.3473 41.7482 44.7573 40.6884 44.7573 39.5833V16.6667C44.7573 15.5616 44.3473 14.5018 43.6174 13.7204C42.8875 12.939 41.8976 12.5 40.8654 12.5H33.0815L29.1896 6.25H17.5137L13.6218 12.5H5.83791C4.80571 12.5 3.81578 12.939 3.0859 13.7204C2.35602 14.5018 1.94597 15.5616 1.94597 16.6667V39.5833Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.3516 35.4167C19.0527 35.4167 15.5678 31.6857 15.5678 27.0833C15.5678 22.481 19.0527 18.75 23.3516 18.75C27.6506 18.75 31.1355 22.481 31.1355 27.0833C31.1355 31.6857 27.6506 35.4167 23.3516 35.4167Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_62_6498">
      <rect width="46.7033" height="50" fill="white" transform="matrix(-1 0 0 1 46.7033 0)"/>
    </clipPath>
  </defs>
</svg>
    </div>)
    
}