import { db } from "../firebase";
//const db = firebase.collection("/tutorials");
let tutorialRef = db.collection('/tutorials');
class TutorialDataService {
  getAll() {
    return tutorialRef;
  }
  create(tutorial) {
    return tutorialRef.add(tutorial);
  }
  update(id, value) {
    return tutorialRef.doc(id).update(value);
  }
  delete(id) {
    return tutorialRef.doc(id).delete();
  }
}
export default new TutorialDataService();