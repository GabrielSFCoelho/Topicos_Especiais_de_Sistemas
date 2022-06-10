
function Login() {

	var redirect = {
		'Violet': "professor/professor.html?usuarioLogado=Violet",
		'Emanuel': "professor/professor.html?usuarioLogado=Emanuel",
		'aluno': "aluno/aluno.html?usuarioLogado=aluno",
		'responsavel': "responsavel/responsavel.html?usuarioLogado=responsavel",
		'secretaria': "secretaria/secretaria.html?usuarioLogado=secretaria",
		'financas': "financas/financas.html?usuarioLogado=financas"
	};

    if (!document.login_form.txtUsuario.value) {
        alert("Favor colocar o Usuário !");
        document.login_form.txtUsuario.focus();
        return;
    }

    if (!document.login_form.txtSenha.value) {
        alert("Favor colocar a Senha !");
        document.login_form.txtSenha.focus();
        return;
    }

	if (!redirect[document.login_form.txtUsuario.value]) {
		alert('Usurio não cadastrado');
		return;
	}
	window.location.href = redirect[document.login_form.txtUsuario.value];
}