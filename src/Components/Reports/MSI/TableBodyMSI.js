import React from 'react'
import {
    Tr,
    Td
  } from "@chakra-ui/react";

const TableBodyMSI = ({date_generation,product,customer, unit,status, id_service, last_event, last_event_date, latitude, longitude, lostDays = false}) => {
    return (
        <Tr className="text-table font-mon tdTable animate__animated animate__flash">
        <Td className="animate__animated animate__flash" >{date_generation}</Td>
        {
            id_service ? (
                <Td className="animate__animated animate__flash" ><a href={`http://crm.avicars.app/index.php?action=UnifiedSearch&module=Home&search_form=false&advanced=false&query_string=${id_service}`} target="_blank" rel="noreferrer">{id_service}</a></Td>

            ):(
                <Td className="animate__animated animate__flash">Sin Id de servicio</Td>        
            )
        }
        {
            product ? (
                <Td className="animate__animated animate__flash">{product}</Td>
            ) : (
                <Td className="animate__animated animate__flash">Sin registro de producto</Td>        
            )
        }
        <Td className="animate__animated animate__flash">{customer}</Td>
        <Td className="animate__animated animate__flash">{unit}</Td>
        <Td className="animate__animated animate__flash">{(status)? status : "Sin Status Registrado"}</Td>
        <Td className="animate__animated animate__flash"><a href={`http://www.google.com/maps/place/${latitude},${longitude}`} target="_blank" rel="noreferrer">{last_event}</a></Td>
        <Td className="animate__animated animate__flash">{last_event_date}</Td>
        {
            lostDays && <Td className="animate__animated animate__flash">{lostDays}</Td>
        }
    </Tr>
    )
}

export default TableBodyMSI
