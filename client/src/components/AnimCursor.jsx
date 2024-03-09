import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimCursor = () => {
  return (
    <div className=''>
    <AnimatedCursor
      innerSize={20}
      outerSize={30}
      color='98, 91, 230'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  )
}

export default AnimCursor