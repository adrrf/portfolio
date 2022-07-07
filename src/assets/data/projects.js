import {v4 as uuidv4} from 'uuid';
import Image from '../images/projectBaseImage.jpg'

const projects = [
    {
        id: uuidv4(),
        name: 'project1',
        state: 'in progress',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam viverra metus eu vulputate. Etiam eget feugiat felis. Cras ornare laoreet felis, eget ullamcorper ante.',
        img: Image
    },
    {
        id: uuidv4(),
        name: 'project2',
        state: 'in progress',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam viverra metus eu vulputate. Etiam eget feugiat felis. Cras ornare laoreet felis, eget ullamcorper ante.',
        img: Image
    },
    {
        id: uuidv4(),
        name: 'project3',
        state: 'in progress',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam viverra metus eu vulputate. Etiam eget feugiat felis. Cras ornare laoreet felis, eget ullamcorper ante.',
        img: Image
    },
    {
        id: uuidv4(),
        name: 'project4',
        state: 'in progress',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam viverra metus eu vulputate. Etiam eget feugiat felis. Cras ornare laoreet felis, eget ullamcorper ante.',
        img: Image
    },
    {
        id: uuidv4(),
        name: 'project5',
        state: 'in progress',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam viverra metus eu vulputate. Etiam eget feugiat felis. Cras ornare laoreet felis, eget ullamcorper ante.',
        img: Image
    }
]

export default projects;