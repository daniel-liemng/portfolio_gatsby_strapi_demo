import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return (
    <div className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(item => {
          const { id, icon, text, title } = item

          return (
            <article key={item.id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Services
