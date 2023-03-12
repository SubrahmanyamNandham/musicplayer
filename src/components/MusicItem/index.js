import {AiOutlineDelete} from 'react-icons/ai'
import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteButton,
  NameGenreContainer,
} from './styledComponents'

const MusicItem = props => {
  const {details, onDelete} = props
  const {imageUrl, id, name, genre, duration} = details

  const onDeleteTrack = () => {
    onDelete(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationDeleteContainer>
    </MusicListItem>
  )
}

export default MusicItem
