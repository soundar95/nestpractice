import { IsEnum, IsNotEmpty, IsOptional, IsString} from "class-validator";
import { taskStatus } from "../task.model";

export class getTaskFilterdto{
    @IsOptional()
   @IsEnum(taskStatus)
    status?:taskStatus;
    @IsOptional()
    @IsString()
    search?:string;
}