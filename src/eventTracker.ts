interface EventTrackerOptions {
  applicationId: String;
  baseUrl?: String;
}
class EventTracker {
  constructor(private options: EventTrackerOptions) {}

  track(eventName: String, eventData: Object): Promise<Response> {
    return fetch(this.options.baseUrl + '/application/' + this.options.applicationId + '/event/' + eventName, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    });
  }
}

export default EventTracker;
