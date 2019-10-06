import * as React from "react"
import { useState } from "react"
import { Publisher } from "../dto/dto"

export const PublisherComponent = (p:{publisher: Publisher}) => {

    if(!p.publisher) return <div className="col-2 publisher" />;

    return <div className="col-2 publisher">
             {p.publisher.name}
             <p className="font-weight-light">
                 {p.publisher.siret + (p.publisher.phone ? " (" + p.publisher.phone + ")" :"")}
             </p>
           </div>
}