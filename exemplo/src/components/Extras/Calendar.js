import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import '@fullcalendar/bootstrap/main.css';

import events from './Calendar.events';

class Calendar extends Component {
    calendarEvents = events;

    calendarPlugins = [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
        bootstrapPlugin
    ];

    calendarHeader = {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    };

    // External events properties

    evColors = [
        'danger',
        'primary',
        'info',
        'success',
        'warning',
        'green',
        'pink',
        'inverse',
        'purple'
    ];

    state = {
        selectedEvent: null,
        evRemoveOnDrop: false,
        evSelectedColor: this.evColors[0],
        evNewName: '',
        externalEvents: [
            { color: 'green', name: 'Lunch' },
            { color: 'danger', name: 'Go home' },
            { color: 'info', name: 'Do homework' },
            { color: 'warning', name: 'Work on UI design' },
            { color: 'inverse', name: 'Sleep tight' }
        ]
    };

    componentDidMount() {
        /* initialize the external events */
        new Draggable(this.refs.externalEventsList, {
            itemSelector: '.fce-event',
            eventData: function(eventEl) {
                return {
                    title: eventEl.innerText.trim()
                };
            }
        });
    }

    addRandomEvent() {
        // add dynamically an event
        this.addEvent({
            title: 'Random Event',
            start: new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                Math.random() * (30 - 1) + 1
            ),
            backgroundColor: '#c594c5', //purple
            borderColor: '#c594c5' //purple
        });
    }

    dayClick = date => {
        this.setState({
            selectedEvent: {
                date: date.dateStr
            }
        });
    };

    // add event directly into calendar
    addEvent(event) {
        this.calendarEvents.push(event);
    }

    handleEventReceive = info => {
        var styles = getComputedStyle(info.draggedEl);
        info.event.setProp('backgroundColor', styles.backgroundColor);
        info.event.setProp('borderColor', styles.borderColor);

        // is the "remove after drop" checkbox checked?
        if (this.state.evRemoveOnDrop) {
            this.removeExternalEvent(info.draggedEl.textContent);
        }
    };

    getEvColorClasses(evcolor) {
        return 'bg-' + evcolor + (this.state.evSelectedColor === evcolor ? ' selected' : '');
    }

    addNewExternalEvent = () => {
        const externalEvents = this.state.externalEvents.concat({
            color: this.state.evSelectedColor,
            name: this.state.evNewName
        });
        this.setState({
            externalEvents
        });
    };

    removeExternalEvent = name => {
        let externalEvents = [...this.state.externalEvents];
        const index = externalEvents.findIndex(e => e.name === name);
        if (index > -1) {
            externalEvents.splice(index, 1);
            this.setState({
                externalEvents
            });
        }
    };

    selectColor = color => () => {
        this.setState({
            evSelectedColor: color
        });
    };

    handleCheck = event => {
        this.setState({
            evRemoveOnDrop: event.target.checked
        });
    };

    handleInputName = event => {
        this.setState({
            evNewName: event.target.value
        });
    };

    render() {
        const { externalEvents, selectedEvent } = this.state;
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        Big Calendar
                        <small>React gcal/outlook like calendar component</small>
                    </div>
                </div>
                <div className="calendar-app">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-12">
                                    {/* START card */}
                                    <Card className="card-default" title="">
                                        <CardHeader>
                                            <CardTitle tag="h4">Draggable Events</CardTitle>
                                        </CardHeader>
                                        {/* Default external events list */}
                                        <CardBody>
                                            <div className="external-events" ref="externalEventsList">
                                            {
                                                externalEvents.map(ev =>
                                                    <div className={'fce-event bg-' + ev.color} key={ev.name+ev.color}>{ev.name}</div>
                                                )
                                            }
                                            </div>
                                            <div className="custom-control custom-checkbox mt-3">
                                                <input className="custom-control-input" id="drop-remove" type="checkbox" onChange={this.handleCheck}/>
                                                <label className="custom-control-label" htmlFor="drop-remove">Remove after Drop</label>
                                            </div>
                                        </CardBody>
                                    </Card>
                                {/* END card */}
                                </div>
                                <div className="col-lg-12 col-md-6 col-12">
                                    {/* START card */}
                                    <Card className="card-default">
                                        <CardHeader>
                                            <CardTitle tag="h4">Create Event</CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="input-group mb-2">
                                                <input className="form-control" type="text" placeholder="Event name..." onChange={this.handleInputName}/>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-secondary" onClick={this.addNewExternalEvent} type="button">Add</button>
                                                </div>
                                            </div>
                                            <p className="text-muted"><small>Choose a Color</small></p>
                                            <ul className="list-inline" id="external-event-color-selector">
                                                {
                                                    this.evColors.map(evc =>
                                                        <li className="list-inline-item p-0" key={evc}>
                                                            <div
                                                                className={"circle circle-xl " + this.getEvColorClasses(evc)}
                                                                onClick={this.selectColor(evc)}></div>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </CardBody>
                                    </Card>
                                {/* END card */}
                                </div>
                            </div>
                            <div className="mb-3">
                                {selectedEvent &&
                                    <div>
                                        <p>Selected:</p>
                                        <div className="box-placeholder">{JSON.stringify(selectedEvent)}</div>
                                    </div>
                                }
                                {!selectedEvent &&
                                    <div>
                                        <p>Click calendar to show information</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <Card className="card-default">
                                <CardBody>
                                    {/* START calendar */}
                                    <FullCalendar
                                        defaultView={this.dayGridMonth}
                                        plugins={this.calendarPlugins}
                                        events={this.calendarEvents}
                                        themeSystem={"bootstrap"}
                                        header={this.calendarHeader}
                                        editable={true}
                                        droppable={true}
                                        deepChangeDetection={true}
                                        dateClick={this.dayClick}
                                        eventReceive={this.handleEventReceive}
                                        >
                                    </FullCalendar>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        );
    }
}

export default Calendar;
