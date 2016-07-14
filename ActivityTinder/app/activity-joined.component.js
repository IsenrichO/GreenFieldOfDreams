(function(app) {
  // Create function to attach everything to and pass any injected service.
  function ActivityComponent(dataService) {
    // Invoke service and save to components name space
    this.name = dataService.getActivity();
    this.activities = [{ name: "zak" }];
    // Had activities in a datasService Prototype for development
    var that = this;
    dataService.getJoinedActivities(function(data) {
      var temp = [];
      for(let item of data) {
        if(item) {
          temp.push(item);
        }
      }
      that.activities = temp;
    });
    //dataService.enterNewActivities();
  }
  // Declare components injectables
  ActivityComponent.parameters = [
    app.DataService
  ];
  // Create new DOM Space for Component
  ActivityComponent.annotations = [
    // create new component
    new ng.core.Component({
      // create selector for html
      selector: 'joined-activities',
      templateUrl: 'app/joinedEvents.html'
    })
  ];

  // Name and link component
  app.ActivityJoinedComponent = ActivityComponent;

})(window.app = window.app || {});

// <ul>
//   <li *ngFor="let activity of activity; let i = index">{{activity.eventName}}</li>
// </ul>