import React from 'react'

import About from './About'
import ContactSection from './ContactSection'
import Menu from './Menu'


function PageContent() {
  return (<>

<div className="w3-content" style={{ maxWidth: 1100 }}></div>

<About></About>
<Menu></Menu>
<ContactSection></ContactSection>


    </>)
}

export default PageContent