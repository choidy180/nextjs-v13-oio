import { authService } from 'firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from 'firebase/auth'

let data = await createUserWithEmailAndPassword(authService, email, password)