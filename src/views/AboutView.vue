<template>
  <Content :title="title">
    <h3 class="first">Text Container</h3>
    <table class="ui celled padded table">
        <thead>
          <tr>
            <th class="single line">Evidence Rating</th>
            <th>Effect</th>
            <th>Efficacy</th>
            <th>Consensus</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <h5 class="ui aligned header">A</h5>
            </td>
            <td class="single line">
                Power Output
            </td>
            <td>
                <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
            </td>
            <td class="right aligned">
                80% 
            </td>
            <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100% 
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100% 
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100% 
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100% 
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100% 
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100%
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100% 
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
            <tr>
              <td>
                  <h5 class="ui aligned header">A</h5>
              </td>
              <td class="single line">
                  Weight
              </td>
              <td>
                  <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
              </td>
              <td class="right aligned">
                  100%
              </td>
              <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
            </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="5">
              <div class="ui right floated pagination menu">
                  <a class="icon item"><i class="left chevron icon"></i></a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item"><i class="right chevron icon"></i></a>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
  </Content>
</template>
<script>
  export default 
  {
    name: 'about',
    components: {},
    data()
    {
      let obj = {
        title : "This is an about page"
      };
      return obj;
    },
    beforeMount(){},
    mounted()
    {
      document.title = this.title;
    },
    computed: {},      
    methods: {}     
  }
</script>