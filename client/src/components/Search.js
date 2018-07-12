import _ from 'lodash'
import API from '../utils/API'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

 const source = _.times(5, () => ({
  topic: API.topic,
 
}))

export default class SearchStandard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: [],
      topic: '',
      language: '',
      date: '',
    };
  }

  componentDidMount() {
    API.getSubmissions().then(res => {
      console.log(res.data);
      const submission = res.data;
      this.setState({ submission });
      console.log({ submission });
    });
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.topic })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.topic)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
       /*  </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>{JSON.stringify(source, null, 2)}</pre>
          </Segment>
        </Grid.Column>
      </Grid> */
    )
  }
}

