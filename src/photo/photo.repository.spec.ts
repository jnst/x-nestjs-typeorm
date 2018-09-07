import {Connection, createConnection} from 'typeorm';
import {PhotoRepository} from './photo.repository';

describe('PhotoRepository', () => {
  let connection: Connection;
  let photoRepository: PhotoRepository;

  beforeAll(async () => {
    connection = await createConnection();
    photoRepository = connection.getCustomRepository(PhotoRepository);

    const photo = photoRepository.create({
      name: 'name',
      description: 'description',
      filename: 'filename',
      views: 0,
      isPublished: false,
    });
    await photoRepository.save(photo);
  });

  afterAll(async () => await connection.close());

  describe('find', () => {
    it('should return array', async () => {
      const photos = await photoRepository.find();
      expect(photos.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('findByViews', () => {
    it('should return empty', async () => {
      const photos = await photoRepository.findByViews(3);
      expect(photos).toHaveLength(0);
    });
  });

});
