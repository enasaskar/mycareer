import { JobfairsModule } from './jobfairs.module';

describe('JobfairsModule', () => {
  let jobfairsModule: JobfairsModule;

  beforeEach(() => {
    jobfairsModule = new JobfairsModule();
  });

  it('should create an instance', () => {
    expect(jobfairsModule).toBeTruthy();
  });
});
