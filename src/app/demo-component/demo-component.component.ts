import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Output,
} from '@angular/core';
import {
  CalendarEvent,
  CalendarMonthViewDay,
  CalendarView,
  CalendarWeekViewBeforeRenderEvent,
} from 'angular-calendar';
import { WeekViewHour, WeekViewHourColumn } from 'calendar-utils';
import { CalendarHeaderComponent } from '../demo-utils/calendar-header.component';





@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo-component.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent {
  view: CalendarView = CalendarView.Month;

  @Output() viewDate: Date = new Date();

  @Output() selectedMonthViewDay: CalendarMonthViewDay;

  @Output() selectedDayViewDate: Date;

  @Output() hourColumns: WeekViewHourColumn[];

  @Output() events: CalendarEvent[] = [];

  selectedDays: any = [];

  dayClicked(day: CalendarMonthViewDay): void {
    this.selectedMonthViewDay = day;
    const selectedDateTime = this.selectedMonthViewDay.date.getTime();
    const dateIndex = this.selectedDays.findIndex(
      (selectedDay:any) => selectedDay.date.getTime() === selectedDateTime
    );
    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDays.splice(dateIndex, 1);
    } else {
      this.selectedDays.push(this.selectedMonthViewDay);
      day.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = day;
    }
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      if (
        this.selectedDays.some(
          (selectedDay:any) => selectedDay.date.getTime() === day.date.getTime()
        )
      ) {
        day.cssClass = 'cal-day-selected';
      }
    });
  }

  hourSegmentClicked(date: Date) {
    this.selectedDayViewDate = date;
    this.addSelectedDayViewClass();
  }

  beforeWeekOrDayViewRender(event: CalendarWeekViewBeforeRenderEvent) {
    this.hourColumns = event.hourColumns;
    this.addSelectedDayViewClass();
  }

  private addSelectedDayViewClass() {
    this.hourColumns.forEach((column) => {
      column.hours.forEach((hourSegment) => {
        hourSegment.segments.forEach((segment) => {
          delete segment.cssClass;
          if (
            this.selectedDayViewDate &&
            segment.date.getTime() === this.selectedDayViewDate.getTime()
          ) {
            segment.cssClass = 'cal-day-selected';
          }
        });
      });
    });
  }
}
