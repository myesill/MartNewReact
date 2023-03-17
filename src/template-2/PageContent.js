import React from 'react'
import About from './About'
import Contact from './Contact'
import Image from './Image'
import ProjectSection from './ProjectSection'

function PageContent() {
  return (<>
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}></div>

<ProjectSection></ProjectSection>
<About></About>  
<Contact></Contact>
<Image></Image>
  </>)
}

export default PageContent