import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

//import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 900,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
      {
         img: '/images/English Vocabulary_26122020.png',
         title: 'IELTS 7+ Band Vocabulary',
         author: 'Chintan Dave',
         playlist:'IELTS 7+ Band Vocabulary'
       },
       {
         img: '/images/English Vocabulary_26122020.png',
         title: 'IELTS 7+ Band Vocabulary',
         author: 'Chintan Dave',
         playlist:'IELTS 7+ Band Vocabulary'
       },
       {
        img: '/images/English Vocabulary_26122020.png',
        title: 'IELTS 7+ Band Vocabulary',
        author: 'Chintan Dave',
        playlist:'IELTS 7+ Band Vocabulary'
      },
      {
        img: '/images/English Vocabulary_26122020.png',
        title: 'IELTS 7+ Band Vocabulary',
        author: 'Chintan Dave',
        playlist:'IELTS 7+ Band Vocabulary'
      },
      {
        img: '/images/English Vocabulary_26122020.png',
        title: 'IELTS Task 2',
        author: 'Chintan Dave',
        playlist:'IELTS Task 2'
      },
      {
        img: '/images/English Vocabulary_26122020.png',
        title: 'IELTS Task 2',
        author: 'Chintan Dave',
        playlist:'IELTS Task 2'
      },
      {
       img: '/images/English Vocabulary_26122020.png',
       title: 'IELTS Task 2',
       author: 'Chintan Dave',
       playlist:'IELTS Task 2'
     },
     {
       img: '/images/English Vocabulary_26122020.png',
       title: 'IELTS Task 2',
       author: 'Chintan Dave',
       playlist:'IELTS Task 2'
     }
];
export default function TitlebarGridList(props) {
  const classes = useStyles();
  if(props.test !== '')
  {
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">All Videos</ListSubheader>
        </GridListTile>
        {tileData.filter(obj => obj.playlist == props.test).map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
           ))}
      </GridList>
    </div>
  );
}
else{
    return( <div className={classes.root}>
            'No Content'
    </div>);
}

}
