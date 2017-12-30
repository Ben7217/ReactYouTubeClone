import React, {Component} from 'react'; // core library works with react components
import ReactDOM from 'react-dom'; // library works to render react
import YTSearch from 'youtube-api-search'; // youtube api search
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyATuATfTHjurHMiKH7mjW58COtpiqHT8iM';


// Create a new component. This component should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null

        };
        this.videoSearch('latest-news');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]

            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
};

// After component is created we need to take this component's generated HTML and put it on the page (in the DOM).

ReactDOM.render(<App/>, document.querySelector('.container'));