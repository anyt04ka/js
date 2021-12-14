
// ��������� � ������� �� ����� �������� ������.
let container = document.querySelector('#taskList');

// ���� - ����, �������� ������
let name = document.querySelector('#taskTitle');

// ���� - ����, �������� ������
let description = document.querySelector('#taskDescription');

// ���� - ����, ����
let data = document.querySelector('#taskData');

// ������
let button = document.querySelector('#taskAddButton');

// ��������� ��������� �� ������, � �������� ������� ��������� �������� �������, ��� ���������� ������� - click. � �������� ������� ��������� �� �������� ������� (callback), �� ������� �� ������ �� ����� ���������� � ��� �������.
button.addEventListener('click', function() {

	// ��������� ��������� �� ���� �������� � ��������, ���� �� ��������� ����-�� ���� ���� - ��������� ���������� ���������� ������� ��������� ������ ��������.
	if (!name.value || !description.value) return;

	// ������� ������� DIV
	let task = document.createElement('div');

	// ��������� �������� DIV ��� ������: card � mt-2
	task.classList.add('card', 'mt-2');

	// ��������� HTML ��� ����� � ��������� �������
	task.innerHTML = `
		<div class="card-header d-flex">
			<div class="card-title">
				<span>${name.value}</span>
			</div>
			<button type="button" class="close d-flex ml-auto" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="card-body">
			<span>${description.value}</span>
		</div>
	`;

  	// ��������� � ��������� ��������� �������
  	container.appendChild(task);

	// �������� �������� ����� �������� � ��������
	name.value = '';
	description.value = '';
});


// ��� ��� �� ����������� ��������� �������� �� ��������, ��� ���������� �� ��������� ������ �������� ���������� �� ���� �� ������ ��������, ������� ����� ������� ������
container.addEventListener('click', function(e) {
	  // ��������� �� ����� ������� �� ��������, ���� �� �������� �� ������� ������� �������� � ���� ����� .close �� ������� ���� ������������ ����
	if (e.target.closest('.close'))
		// ����������� �� ������������� ���������� � ������� ��� ���������
		e.target.closest('.card').remove();
});


$("#taskAddButton").click(function() {// ������ ������ � �������� � ���� ����� �� ����
  $("#taskList").append(`
  <div class="card mt-2">
	<div class="card-header d-flex">
		<div class="card-title"><span>${$("#taskTitle").value()}</span>
		</div>
		<button type="button" class="close d-flex ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	</div>
    <div class="card-body"><span>${$("#taskDescription").val()}</span>
    </div>
  </div>`);
  //append = ��������� � �������, ��� ������� �� ������ ������ ��-�� (�������)
  //$("#..") - ����� �������� �� id
  //$("#..").val - ��������� �������� ��� input
});

$("#taskList").on("click", ".close", function() {// ������ ������� � ��������� �� ���� ������� �� �����. ����� ������ ������ ��� �� ������������.
  $(this).closest(".card").remove(); // remove - ������� ��������� ��-��
});

