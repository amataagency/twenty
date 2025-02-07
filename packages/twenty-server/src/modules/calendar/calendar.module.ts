import { Module } from '@nestjs/common';

import { CalendarBlocklistManagerModule } from 'src/modules/calendar/blocklist-manager/calendar-blocklist-manager.module';
import { CalendarEventCleanerModule } from 'src/modules/calendar/calendar-event-cleaner/calendar-event-cleaner.module';
import { CalendarEventImportManagerModule } from 'src/modules/calendar/calendar-event-import-manager/calendar-event-import-manager.module';
import { CalendarEventParticipantModule } from 'src/modules/calendar/calendar-event-participant-manager/calendar-event-participant.module';

@Module({
  imports: [
    CalendarBlocklistManagerModule,
    CalendarEventCleanerModule,
    CalendarEventImportManagerModule,
    CalendarEventParticipantModule,
  ],
  providers: [],
  exports: [],
})
export class CalendarModule {}
