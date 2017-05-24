
export class WorkerDto {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  workplaceId: number;

  constructor(firstName: string, lastName: string, role: string, workplaceId: number)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.workplaceId = workplaceId;
  }
}
