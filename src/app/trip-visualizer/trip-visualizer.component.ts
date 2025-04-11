import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-visualizer',
  templateUrl: './trip-visualizer.component.html',
  styleUrls: ['./trip-visualizer.component.scss']
})
export class TripVisualizerComponent {
  startPoint = '';
  endPoint = '';
  trips: { startPoint: string, endPoint: string }[] = [];

  addTrip() {
    if (this.startPoint && this.endPoint) {
      this.trips.push({ startPoint: this.startPoint.trim(), endPoint: this.endPoint.trim() });
      this.startPoint = '';
      this.endPoint = '';
    }
  }

  getCurvePath(i: number): string {
    const x1 = i * 150 + 20;
    const y1 = 60;
    const x2 = (i + 1) * 150 + 20;
    const y2 = 60;

    const controlX1 = x1 + 50;
    const controlY1 = y1 - 60;
    const controlX2 = x2 - 50;
    const controlY2 = y2 + 60;

    return `M ${x1},${y1} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${x2},${y2}`;
  }

  isContinuedTrip(index: number): boolean {
    if (index === 0) return true;
    return this.trips[index - 1].endPoint === this.trips[index].startPoint;
  }

  isRepeatedTrip(index: number): boolean {
    if (index === 0) return false;
    const current = this.trips[index];
    const prev = this.trips[index - 1];
    return current.startPoint === prev.startPoint && current.endPoint === prev.endPoint;
  }

  getTripColor(index: number): string {
    if (this.isRepeatedTrip(index)) return 'gray';
    if (this.isContinuedTrip(index)) return 'blue';
    return 'orange';
  }

  resetTrips() {
    this.trips = [];
    this.startPoint = '';
    this.endPoint = '';
  }
}
