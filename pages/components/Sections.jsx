export default function Sections({sectionContent}){
  return(
    <>
     <div className="container my-2">
      <div className="card">
        <div className="card-body">
          <p className="text-warning">
        {sectionContent.title}
      </p>
      {sectionContent.subtitle}
        </div>
      </div>
     </div>
    </>
  )
}