import { IsEnum } from "class-validator";
import { taskStatus } from "../task.model";

export class taskStatusdto{
    @IsEnum(taskStatus)
    status:taskStatus;
}