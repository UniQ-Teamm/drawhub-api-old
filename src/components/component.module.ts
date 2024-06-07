import { Global, Module } from '@nestjs/common';

import { I18nService } from './i18n.service';

@Global()
@Module({
  imports: [],
  providers: [I18nService],
  exports: [I18nService],
})
export class ComponentModule {}
