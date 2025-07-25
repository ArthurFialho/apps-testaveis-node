export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  constructor(props: AppointmentProps) {
    this.props = props;
  }

  get customer(): string {
    return this.props.customer;
  }

  get startsAt(): Date {
    return this.props.startsAt;
  }

  get endsAt(): Date | undefined {
    return this.props.endsAt;
  }
}