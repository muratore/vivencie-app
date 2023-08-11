export interface TitleSectionsProps {
  title: string;
  className?:string
}

const TitleSections = (props: TitleSectionsProps) => {
  return (
        <h1 className={`text-3xl xl:text-5xl font-light w-full  
        border-b border-white pb-5 mt-4 lg:mt-16 mb-12 text-white
        ${props.className ?? ''}
        `}>
          {props.title}
        </h1>
  );
};

export default TitleSections;
