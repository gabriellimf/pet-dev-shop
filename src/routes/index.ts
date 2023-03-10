import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

//PagesControllers
router.get('/', PageController.home);
router.get('/dogs', PageController.default);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//SearchControllers
router.get('/search', SearchController.search);

export default router;