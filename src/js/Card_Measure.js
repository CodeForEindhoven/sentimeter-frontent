var Card_Measure = (function(){

	var s ={
		demate: b.cl({
			"font-weight": "700",
		}),
		waarin: b.cl({
			"font-weight": "200",
		}),
		illustration: b.cl({
			"margin-top": "40px",
			"margin-bottom": "40px",
			"text-align": "center"
		}),
		img: b.cl({
			"width": "75px"
		})
	};

	return {
		controller: function(indicator){
			//var selected = m.prop(
			//	model.my_cards().find(
			//		function(c){
			//			return indicator.id === c;
			//		}) !== undefined);
			//return {
			//	selected: selected,
			//	onclick: function(){
			//		selected(true);
			//		model.select_card(indicator);
			//	}
			//};
		},
		view: function(ctrl, indicator, interaction){
			return m.component(Card, [
				m("div",[
					m("div",{class: s.demate},"De mate waarin "),
					m("div",{class: s.waarin}, indicator.title),
					m("div", {class: s.illustration},[
						m("img", {class: s.img, src: "https://d30y9cdsu7xlg0.cloudfront.net/png/102230-200.png"})
					]),
					interaction
				])
			]);
		}
	};

})();
