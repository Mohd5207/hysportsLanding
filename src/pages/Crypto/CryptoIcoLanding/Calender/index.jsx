import FullCalendar from '@fullcalendar/react'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import dayGridPlugin from "@fullcalendar/daygrid";
// import listPlugin from '@fullcalendar/list';

function index() {

    const events = [
        {
          id: 1,
          title: "Brithday Party",
          start: new Date().setDate(new Date().getDate() + 1),
          className: "bg-success text-white",
        },
        {
          id: 2,
          title: "Meeting",
          start: new Date(),
          end: new Date(),
          className: "bg-success text-white",
        },
        {
          id: 3,
          title: "Click For Google",
          start: new Date().setDate(new Date().getDate() + 18),
          className: "bg-dark text-white",
        },
        {
          id: 4,
          title: "All Day Event",
          start: new Date().setDate(new Date().getDate() - 9),
          className: "bg-primary text-white",
        },
        {
          id: 5,
          title: "Repeating Event",
          start: new Date().setDate(new Date().getDate() - 3),
          className: "bg-info text-white",
        },
        {
          id: 6,
          title: "Lunch",
          start: new Date().setDate(new Date().getDate()),
          className: "bg-danger text-white",
        },
        {
          id: 7,
          title: "Repeating Event",
          start: new Date().setDate(new Date().getDate() + 4),
          className: "bg-primary text-white",
        },
        {
          id: 8,
          title: "Long Event",
          start: new Date().setDate(new Date().getDate() - 5),
          end: new Date().setDate(new Date().getDate() - 3),
          className: "bg-warning text-white",
        },
      ];
      

  return (
    <Card>
        <CardHeader>Upcoming Events</CardHeader>
        <CardBody>
       
                      {/* fullcalendar control */}
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                        //   listPlugin,
                          interactionPlugin,
                        ]}
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                        }}
                        events={events}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />
                    
                 
        </CardBody>
    </Card>
  )
}

export default index