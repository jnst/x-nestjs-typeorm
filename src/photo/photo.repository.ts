import {EntityRepository, Repository} from 'typeorm';
import {Photo} from './photo.entity';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
  findByViews(views) {
    return this.createQueryBuilder('photo')
      .where('photo.views >= :views', {views})
      .getMany();
  }
}
