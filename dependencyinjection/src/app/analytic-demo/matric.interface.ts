export interface Metric{
    eventName:string;
    scope:string;

    // let metric:Metric={
    //     eventName='loggedIn',
    //     scope='Nihkil'
    // }
}

export interface AnalyticsImplementation{
    recordEvent(mertic:Metric):void;
}