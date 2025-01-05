interface SectionProps {
    image?: string;
    outerBackgroundImage?: string;
    direction?: "flex-row" | "flex-row-reverse";
    title: string;
    description: string;
    outerBackgroundColor?: string;
    innerBackgroundColor?: string;
  }
  
  export default function Section({
    image,
    outerBackgroundImage,
    direction = "flex-row",
    title,
    description,
    outerBackgroundColor = "transparent",
    innerBackgroundColor = "",
  }: SectionProps) {
    return (
      <div
        className={`w-full flex ${direction} justify-between items-center bg-cover bg-center`}
        style={{
          height: outerBackgroundImage? "363px": "",
          backgroundImage: outerBackgroundImage ? `url(${outerBackgroundImage})` : "none",
          backgroundColor: outerBackgroundImage ? "transparent" : outerBackgroundColor,
        }}
      >
        <div
          className="h-[272px] max-w-[503px] w-full bg-cover bg-center"
          style={{
            backgroundImage: image ? `url(${image})` : "none",
          }}
        >
        </div>
        <div className="flex flex-col w-[40%] h-[112px] justify-center"
            style={{ backgroundColor: innerBackgroundColor,
                     color: innerBackgroundColor ? "white" : "#212121",
                     maxWidth: innerBackgroundColor? "300px": "",
                     height: innerBackgroundColor? "200px": "",
                     padding: innerBackgroundColor? "10px": "",
                     marginLeft: innerBackgroundColor ? "50px": ""
             }}>
          <span className="text-2xl font-bold mb-3">{title}</span>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  