import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/lib/constants'
import { TextGenerateEffect } from './ui/TextGenerateEffect '

const Grid = () => {
  return (
    <section id='about'>
      <TextGenerateEffect 
      margin={40} 
      color='purple-400'
      className="text-center mt-8 text-[20px] md:text-2xl lg:text-3xl" 
      words='About Me'/>
      <BentoGrid>
        {gridItems.map((item) => (
            <BentoGridItem 
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            />
        ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid
