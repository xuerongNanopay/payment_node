interface IAccount {
  type: string;
  id: number,
  name: string;
  domination: string;
  description?: string;
  isDefault?: boolean;
  owner: object;
  lifeCycleState: string;
  transferIn: boolean;
  transferOut: boolean;

  createdAt: Date;
  updatedAt: Date;
  createBy: object;
  updateBy: object;
}