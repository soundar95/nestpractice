import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],       //contains imports ,exports,controller and provider

})
export class AppModule {}
  
//modules  are the effective way to organise components by closely set of capabilities
//modules are singleton and can be imported by multiple other module 