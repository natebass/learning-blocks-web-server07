from current_grades_dan import get_current_grades


def test_current_grades02():
    get_current_grades(
        aeries_base_url='https://demo.aeries.net/aeries',
        aeries_api_token='477abe9e7d27439681d62f4e0de1f5e1',
        school_code='994',
        student_ids=['99400002'],
    )
